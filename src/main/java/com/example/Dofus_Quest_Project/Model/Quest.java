package com.example.Dofus_Quest_Project.Model;

import javax.persistence.*;

@Entity
@Table(name = "Quest")
public class Quest {

    @Id
    @GeneratedValue(strategy= GenerationType.TABLE)
    @Column(name = "idQuest")
    private long idQuest;
    private String name;
    private String locationName;

    public Quest() {}

    public Quest(long idQuest, String name, String locationName) {
        this.idQuest = idQuest;
        this.name = name;
        this.locationName = locationName;
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
}
