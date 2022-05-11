package com.devsuperor.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperor.dsmovie.entities.Score;
import com.devsuperor.dsmovie.entities.ScorePK;


public interface ScoreRepository extends JpaRepository<Score,ScorePK> {

	
}
