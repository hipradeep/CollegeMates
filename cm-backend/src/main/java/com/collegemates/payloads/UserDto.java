package com.collegemates.payloads;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.*;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

	private Integer id;
	@NotEmpty
	@Size(min = 4, message = "Username must have min 4 characters")
	private String name;

	@Email(message = "Your email is not valid")
	private String email;
	
	@NotEmpty
	@Size(min = 3,max=10,  message = "password must be of min 3 and max 10 characters")
	private String password;
	
	@NotEmpty
	private String userType;


	private String bio;

	private String dob;

	private List<CollegeDto> colleges;

	@Override
	public String toString() {
		return "UserDto{" +
				"id=" + id +
				", name='" + name + '\'' +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", userType='" + userType + '\'' +
				", bio='" + bio + '\'' +
				", dob='" + dob + '\'' +
				", collegeDtos=" + colleges +
				'}';
	}
}