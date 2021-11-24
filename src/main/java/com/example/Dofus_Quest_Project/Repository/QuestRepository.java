package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Model.Succes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface QuestRepository extends CrudRepository<Quest, Long> {

    <S extends Quest> S save(S entity);
    <S extends Quest> Iterable<S> saveAll(Iterable<S> entities);

    Iterable<Quest> findAll();
    void delete(Quest entity);

    @Query("SELECT theQuest FROM Quest as theQuest where theQuest.name=:name")
    Iterable<Quest> findByName(String name);

    @Query("SELECT theQuest FROM Quest as theQuest where theQuest.locationName=:location")
    Iterable<Quest> findByLocation(String location);
}
