package com.ssaft.project.Repository;

import com.ssaft.project.domain.PostData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostDataRepository  extends JpaRepository<PostData, Integer> {
}
