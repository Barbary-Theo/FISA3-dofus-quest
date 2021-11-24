package com.example.Dofus_Quest_Project.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Succes")
public class Succes implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "idSucces")
    private long idSucces;

    @Column(name = "name")
    private String name;

    @Column(name = "nbPoint")
    private int nbPoint;

    public Succes(){}

    public Succes(String name, int nbPoint) {
        this.name = name;
        this.nbPoint = nbPoint;
    }

    public long getIdSucces() {
        return idSucces;
    }

    public void setIdSucces(long idSucces) {
        this.idSucces = idSucces;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getNbPoint() {
        return nbPoint;
    }

    public void setNbPoint(int nbPoint) {
        this.nbPoint = nbPoint;
    }


}
