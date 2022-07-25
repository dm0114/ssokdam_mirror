package com.ssaft.project.Repository;

import com.ssaft.project.domain.EmbeddedData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmbeddedDataRepository extends JpaRepository<EmbeddedData, Integer> {
}
