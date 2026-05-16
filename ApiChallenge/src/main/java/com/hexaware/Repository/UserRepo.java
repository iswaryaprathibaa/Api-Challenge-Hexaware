package com.hexaware.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.Entity.User;

public interface UserRepo extends JpaRepository<User,Integer>{
	 Optional<User> findByEmail(String email);

	 Optional<User> findFirstByEmail(String username);
}
