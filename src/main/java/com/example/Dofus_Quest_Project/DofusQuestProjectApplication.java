package com.example.Dofus_Quest_Project;

import com.example.Dofus_Quest_Project.Controller.QuestController;
import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Repository.PlayerRepository;
import com.example.Dofus_Quest_Project.Repository.QuestRepository;
import com.example.Dofus_Quest_Project.Repository.SuccesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class DofusQuestProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(DofusQuestProjectApplication.class, args);
	}


}
