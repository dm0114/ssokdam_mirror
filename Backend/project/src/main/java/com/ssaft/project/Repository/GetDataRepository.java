package com.ssaft.project.Repository;

import com.ssaft.project.domain.GetData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GetDataRepository extends JpaRepository<GetData, Integer> {
    public List<GetData> findByPostData(PostData data);
}
