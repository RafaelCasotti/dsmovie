package com.devsuperor.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperor.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {

	
}
