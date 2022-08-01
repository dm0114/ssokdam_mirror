package com.ssaft.project.Repository;

import com.ssaft.project.domain.GetData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GetDataRepository extends JpaRepository<GetData, Integer> {
    public List<GetData> findByPostData(PostData data);
}
