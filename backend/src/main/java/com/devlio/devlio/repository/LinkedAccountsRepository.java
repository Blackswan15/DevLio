package com.devlio.devlio.repository;

import com.devlio.devlio.entity.LinkedAccounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface LinkedAccountsRepository extends JpaRepository<LinkedAccounts, UUID> {
    List<LinkedAccounts> findByUser_Id(UUID userId);
}
