package com.example.Dofus_Quest_Project.Controller;

import com.example.Dofus_Quest_Project.Model.*;
import com.example.Dofus_Quest_Project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.*;

@Path("players")
@Controller
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private QuestController questController;

    @Autowired
    private SuccesController succesController;


    /* ================== GET ================== */

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Player hello() {
        return new Player();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Iterable<Player> getAll() {
        return playerRepository.findAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/pseudo")
    public Iterable<Player> getByPseudo(@QueryParam("pseudo") String pseudo) {
        return playerRepository.findByPseudo(pseudo);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/id")
    public Optional<Player> getById(@QueryParam("id") long id) {
        return playerRepository.findById(id);
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/quest")
    public Set<Quest> getQuestByIdPlayer(@QueryParam("id") long id) {
        Optional<Player> player = playerRepository.findById(id);
        return player.map(Player::getQuestDone).orElse(null);
    }

    /* ================== POST ================== */

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Player insert(Player player) {
        playerRepository.save(player);
        return player;
    }


    /* ================== DELETE ================== */

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteById(@QueryParam("id") long id) {
        playerRepository.deleteById(id);
        return "deleted player with id " + id + " done.";
    }


    /* ================== PATCH ================== */

    @PATCH
    @Produces(MediaType.APPLICATION_JSON)
    public Set<Quest> addQuest(@QueryParam("id") long id,
                           Quest quest) {

        //Get the quest's succes by its name
        Optional<Succes> succes = succesController.getByName(quest.getSucces().getName());

        if(succes.isPresent()) {
            quest.setSucces(succes.get());

            Optional<Player> optionalPlayer = playerRepository.findById(id);
            if(optionalPlayer.isPresent()) {

                Player player = optionalPlayer.get();
                player.addQuest(quest);
                playerRepository.save(player);
                return player.getQuestDone();
            }
            else {
                throw new IllegalArgumentException("Le joueur ?? l'id " + id + " n'existe pas");
            }
        }
        else {
            throw new IllegalArgumentException("Le succes au nom " + quest.getSucces().getName() + " n'existe pas");
        }



    }

    @PATCH
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/rm")
    public Set<Quest> removeQuest(@QueryParam("idP") long idP,
                                  @QueryParam("idQ") long idQ) {


        Optional<Quest> optionalQuest = questController.getById(idQ);

        if(optionalQuest.isPresent()) {
            Quest quest = optionalQuest.get();
            Optional<Player> optionalPlayer = playerRepository.findById(idP);

            if(optionalPlayer.isPresent()) {
                Player player = optionalPlayer.get();

                player.removeQuest(quest);
                playerRepository.save(player);

                return player.getQuestDone();
            }
            else {
                throw new IllegalArgumentException("Le joueur ?? l'id " + idP + " n'existe pas");
            }

        }
        else {
            throw new IllegalArgumentException("La qu??te ?? l'id " + idQ + " n'existe pas");
        }

    }


    /* ================== PUT ================== */



    /* ~~~~~~~~~~~~~~~~~ INIT METHOD ~~~~~~~~~~~~~~~~~ */

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/initPlayer")
    public Iterable<Player> initPlayer() {

        ArrayList players = new ArrayList();

        var quests = questController.getByLocation("Incarnam");
        Set<Quest> questsForBidouche = new HashSet<>();
        for(Quest quest : quests) {
            questsForBidouche.add(quest);
        }

        players.add(new Player("Bidouche", "admin", questsForBidouche));
        players.add(new Player("Alone :(", "admin", new HashSet<Quest>()));

        return playerRepository.saveAll(players);
    }

}
