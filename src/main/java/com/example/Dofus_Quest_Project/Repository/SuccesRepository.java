package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Succes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface SuccesRepository extends CrudRepository<Succes, Long> {


    <S extends Succes> S save(S entity);
    void delete(Succes entity);
    Optional<Succes> findById(Long aLong);
    Iterable<Succes> findAll();

    @Query("SELECT theSucces FROM Succes as theSucces where theSucces.name=:name")
    Iterable<Succes> findByName(String name);

}
