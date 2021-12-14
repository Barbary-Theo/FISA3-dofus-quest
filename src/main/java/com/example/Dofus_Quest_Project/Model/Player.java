package com.example.Dofus_Quest_Project.Model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "Player")
public class Player implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.TABLE)
    @Column(name = "idPlayer")
    private long idPlayer;

    @Column(name = "password")
    private String password;

    @Column(name = "pseudo")
    private String pseudo;

    @ManyToMany(fetch = FetchType.EAGER)
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(name = "player_quest",
        joinColumns = { @JoinColumn(name = "player_id_player")},
        inverseJoinColumns = { @JoinColumn(name = "quest_id_quest")})
    private Set<Quest> questDone = new HashSet<>();

    public Player(){}

    public Player(String pseudo, String password, Set<Quest> quests) {
        this.pseudo = pseudo;
        this.password = password;
        this.questDone = quests;
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

    public Set<Quest> getQuestDone() {
        return questDone;
    }

    public void setQuestDone(Set<Quest> questDone) {
        this.questDone = questDone;
    }

    public void addQuest(Quest quest) {
        questDone.add(quest);
    }

    public void removeQuest(Quest quest) {
        Set<Quest> finalDone = new HashSet<>();

        for(Quest quete : questDone){
            if(quest.getIdQuest() != quete.getIdQuest()) finalDone.add(quete);
        }

        questDone = finalDone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
