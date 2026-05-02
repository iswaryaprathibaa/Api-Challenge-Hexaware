package com.hexaware.Response;

import java.time.LocalDateTime;

public class ApiResponse<T> {
	private String message;
	private int status;
	private LocalDateTime timestamp;
	private T data;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = LocalDateTime.now();
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public ApiResponse(String message, int status, T data) {
		super();
		this.message = message;
		this.status = status;
		this.data = data;
		this.timestamp=LocalDateTime.now();
	}
	public ApiResponse() {
		super();
	}
	
}
