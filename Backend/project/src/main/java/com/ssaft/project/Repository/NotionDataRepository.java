package com.ssaft.project.Repository;

import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.NotionData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotionDataRepository extends JpaRepository<NotionData, String> {

    public List<NotionData> findByIotUser(IotUser id);
}
