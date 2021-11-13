package com.example.Dofus_Quest_Project.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "Player")
public class Player {

    @Id
    @GeneratedValue(strategy= GenerationType.TABLE)
    @Column(name = "idPlayer")
    private long idPlayer;
    private String pseudo;
    @OneToMany
    private Collection<Quest> questDone = new ArrayList<>();
    @OneToMany
    private Collection<Succes> succesDone = new ArrayList<>();

    public Player(){}

    public Player(long idPlayer, String pseudo, Collection<Quest> questDone, Collection<Succes> succesDone) {
        this.idPlayer = idPlayer;
        this.pseudo = pseudo;
        this.questDone = questDone;
        this.succesDone = succesDone;
    }

    public long getIdPlayer() {
        return idPlayer;
    }

    public void setIdPlayer(long idPlayer) {
        this.idPlayer = idPlayer;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public Collection<Quest> getQuestDone() {
        return questDone;
    }

    public void setQuestDone(Collection<Quest> questDone) {
        this.questDone = questDone;
    }

    public Collection<Succes> getSuccesDone() {
        return succesDone;
    }

    public void setSuccesDone(Collection<Succes> succesDone) {
        this.succesDone = succesDone;
    }
}
