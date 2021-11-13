package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Quest;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface QuestRepository extends CrudRepository<Quest, Long> {

    public <S extends Quest> S save(S entity);
    public Iterable<Quest> findAll();
    public void delete(Quest entity);
}
