package com.example.Dofus_Quest_Project.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Quest")
public class Quest implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "idQuest")
    private long idQuest;

    @Column(name = "name")
    private String name;

    @Column(name = "locationName")
    private String locationName;

    @Column(name = "players")
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE, mappedBy = "questDone")
    private Set<Player> players = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "idSucces")
    private Succes succes;

    public Quest() {}

    public long getIdQuest() {
        return idQuest;
    }

    public void setIdQuest(long idQuest) {
        this.idQuest = idQuest;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public void setPlayers(Set<Player> players) {
        this.players = players;
    }

    public Succes getSucces() {
        return succes;
    }

    public void setSucces(Succes succes) {
        this.succes = succes;
    }
}
