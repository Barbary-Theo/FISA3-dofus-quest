package com.example.Dofus_Quest_Project.Repository;

import com.example.Dofus_Quest_Project.Model.Player;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface PlayerRepository extends CrudRepository<Player, Long> {

    public <S extends Player> S save(S entity);
    public Iterable<Player> findAll();
    public void delete(Player entity);
    public Iterable<Player> findByPseudo(String pseudo);

}
