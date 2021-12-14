package com.example.Dofus_Quest_Project.Model;

import org.hibernate.annotations.Cascade;

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

    @Column(name = "level")
    private int level;

    @Column(name = "name")
    private String name;

    @Column(name = "locationName")
    private String locationName;

    @Column(name = "imageSrc")
    private String imageSrc;

    @Column(name = "players")
    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "questDone")
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    private Set<Player> players = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name = "idSucces")
    private Succes succes;

    public Quest() {}

    public Quest(int level, String name, String locateName, Succes succes, String imageSrc) {
        this.level = level;
        this.name = name;
        this.locationName = locateName;
        this.succes = succes;
        this.imageSrc = imageSrc;
    }

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

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getImageSrc() {
        return imageSrc;
    }

    public void setImageSrc(String imageSrc) {
        this.imageSrc = imageSrc;
    }
}
