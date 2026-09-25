package com.devlio.devlio.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name="platforms")
public class Platform {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;

    private String url;
}
