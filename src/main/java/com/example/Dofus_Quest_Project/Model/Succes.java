package com.example.Dofus_Quest_Project.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "Succes")
public class Succes {

    @Id
    @GeneratedValue(strategy= GenerationType.TABLE)
    @Column(name = "idSucces")
    private long idSucces;
    private String name;
    @OneToMany
    private Collection<Quest> questInThisSucces = new ArrayList<>();
    private int nbPoint;

    public Succes(){}

    public Succes(long idSucces, String name, Collection<Quest> questInThisSucces, int nbPoint) {
        this.idSucces = idSucces;
        this.name = name;
        this.questInThisSucces = questInThisSucces;
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

    public Collection<Quest> getQuestInThisSucces() {
        return questInThisSucces;
    }

    public void setQuestInThisSucces(Collection<Quest> questInThisSucces) {
        this.questInThisSucces = questInThisSucces;
    }

    public int getNbPoint() {
        return nbPoint;
    }

    public void setNbPoint(int nbPoint) {
        this.nbPoint = nbPoint;
    }
}
