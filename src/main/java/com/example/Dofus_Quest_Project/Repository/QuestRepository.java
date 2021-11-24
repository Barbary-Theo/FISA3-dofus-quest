package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Model.Succes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface QuestRepository extends CrudRepository<Quest, Long> {

    public <S extends Quest> S save(S entity);
    public Iterable<Quest> findAll();
    public void delete(Quest entity);

    @Query("SELECT theQuest FROM Quest as theQuest where theQuest.name=:name")
    Iterable<Quest> findByName(String name);
}
