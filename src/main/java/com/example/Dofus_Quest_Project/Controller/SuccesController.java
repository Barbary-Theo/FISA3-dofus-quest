package com.example.Dofus_Quest_Project.Controller;

import com.example.Dofus_Quest_Project.Model.Succes;
import com.example.Dofus_Quest_Project.Repository.SuccesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Optional;

@Path("succes")
@Controller
public class SuccesController {


    @Autowired
    private SuccesRepository succesRepository;

    /* ================== GET ================== */

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("Hello")
    public Succes hello() {
        return new Succes();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Iterable<Succes> getAll() {
        return succesRepository.findAll();
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Optional<Succes> getById(@QueryParam("id") long id) {
        return succesRepository.findById(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/name")
    public Optional<Succes> getByName(@QueryParam("name") String name) {
        return succesRepository.findByName(name);
    }


    /* ================== POST ================== */

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Succes insert(Succes succes) {
        succesRepository.save(succes);
        return succes;
    }


    /* ================== DELETE ================== */

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteById(@QueryParam("id") long id) {
        succesRepository.deleteById(id);
        return "deleted succes with id " + id + " done.";
    }


    /* ================== PATCH ================== */



    /* ================== PUT ================== */



    /* ~~~~~~~~~~~~~~~~~ INIT METHOD ~~~~~~~~~~~~~~~~~ */

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/initSucces")
    public Iterable<Succes> initSucces() {

        ArrayList<Succes> succesList = new ArrayList<>();

        succesList.add(new Succes("En route pour l aventure", 40));
        succesList.add(new Succes("Vert Emeraude", 50));
        succesList.add(new Succes("Être plus royaliste que le roi", 20));
        succesList.add(new Succes("Fri carré", 10));
        succesList.add(new Succes("L occasion fait le larron", 70));
        succesList.add(new Succes("D un monde à l autre", 45));
        succesList.add(new Succes("Pourpre profond", 30));
        succesList.add(new Succes("Rusé comme une Lenalde", 45));
        succesList.add(new Succes("Wabbit en feu", 35));
        succesList.add(new Succes("Ramdam sur Incarnam", 65));
        succesList.add(new Succes("La chasse aux chasseurs", 55));
        succesList.add(new Succes("Pas le temps de chômer", 50));
        succesList.add(new Succes("Escapades et embuscades", 40));

        return succesRepository.saveAll(succesList);
    }

}