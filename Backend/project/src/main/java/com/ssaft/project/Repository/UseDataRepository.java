package com.ssaft.project.Repository;

import com.ssaft.project.domain.UseData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UseDataRepository extends JpaRepository<UseData, Integer> {
}
