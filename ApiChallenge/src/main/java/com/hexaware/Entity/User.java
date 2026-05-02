package com.hexaware.Entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
	 	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    private String name;
	    private String email;
	    private String password;
	    @Enumerated(EnumType.STRING)
	    private UserRole userRole;
		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
			// TODO Auto-generated method stub
			return List.of(new SimpleGrantedAuthority(userRole.name()));
		}
		@Override
		public String getUsername() {
			// TODO Auto-generated method stub
			return email;
		}
}
