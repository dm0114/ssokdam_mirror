package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Table(name = "tb_get")
@Getter @Setter
@Entity
@NoArgsConstructor
@ToString
public class GetData {
    @Id
    @Column(name = "get_seq")
    private int getSeq;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "pst_seq", updatable = false)
    private PostData postData;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", updatable = false)
    private IotUser iotUser;

    @Column(name = "get_sub")
    private int getSub = 0;

    @Column(name = "get_dt")
    private String getDt;

    @Column(name = "get_title")
    private String getTitle;

    @Column(name = "get_ctnt")
    private String getCtnt;

    @Column(name = "get_dumy")
    private String getDumy;

    @Transient
    private int pstSeq;

    @Transient
    private String userId;
}
