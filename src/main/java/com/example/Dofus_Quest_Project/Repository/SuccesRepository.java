package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Succes;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface SuccesRepository extends CrudRepository<Succes, Long> {


    public <S extends Succes> S save(S entity);
    public Iterable<Succes> findAll();
    public void delete(Succes entity);
}
