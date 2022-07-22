package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "tb_post")
@Getter @Setter
@Entity
@ToString
@NoArgsConstructor
public class PostData {
    @Id
    @Column(name = "pst_seq")
    private int pstSeq;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", updatable = false)
    private IotUser iotUser;

    @Column(name = "pst_dt")
    private String pstDt;

    @Column(name = "pst_title")
    private String pstTitle;

    @Column(name = "pst_ctnt")
    private String pstCtnt;

    @Column(name = "pst_Check")
    private String pstCheck;

    @Column(name = "pst_dumy")
    private String pstDumy;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "pst_seq")
    private List<PostData> postDataList = new ArrayList<>();

    @Transient
    private String userId;
}
