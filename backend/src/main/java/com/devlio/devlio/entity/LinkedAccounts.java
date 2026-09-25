package com.devlio.devlio.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name="linked_accounts")

public class LinkedAccounts {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name="user_id",nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "platform_id",nullable = false)
    private Platform platform;

    private String username;
    @Column(name = "profile_url")
    private String profile_url;
    @Column(name="linked_at")
    private LocalDateTime linked_at;
    @Column(name="last_synced_at")
    private LocalDateTime last_synced_at;
    @Column(name="sync_status")
    private String sync_status;
    @Column(name="created_at")
    private LocalDateTime created_at;
    @Column(name="updated_at")
    private LocalDateTime updated_at;

}
