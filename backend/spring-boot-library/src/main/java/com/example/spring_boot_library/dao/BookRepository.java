package com.example.spring_boot_library.dao;

import com.example.spring_boot_library.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
    Page<Book> findByTitleContaining(String title, Pageable pageable);

    Page<Book> findByCategory(String category, Pageable pageable);
}
