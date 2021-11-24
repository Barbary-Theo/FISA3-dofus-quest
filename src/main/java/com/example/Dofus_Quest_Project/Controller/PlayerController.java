package com.example.Dofus_Quest_Project.Controller;

import com.example.Dofus_Quest_Project.Model.*;
import com.example.Dofus_Quest_Project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("players")
@Controller
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;


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



    /* ================== PUT ================== */

    /*

    @PATCH
    @Produces(MediaType.APPLICATION_JSON)
    @Path("change")
    public Player modifyElement(@QueryParam("id") int id, Player Player) {
        Player.PlayerList.get(id).setPrenom(Player.getPrenom());
        Player.PlayerList.get(id).setAge(Player.getAge());
        return Player.PlayerList.get(id);
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Path("changeAll")
    public Player modifyEverythings(@QueryParam("id") int id, Player Player) {
        Player.PlayerList.set(id, Player);
        return Player.PlayerList.get(id);
    }
    */

}
