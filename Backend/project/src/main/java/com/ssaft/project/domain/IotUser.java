package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "tb_user")
@Getter @Setter
@ToString
@Entity
@NoArgsConstructor
public class IotUser {

    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(name = "user_pwd")
    private String userPwd;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_phone")
    private String userPhone;

    @Column(name = "user_birth_day")
    private String userBirthDay;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_img")
    @ColumnDefault("")
    private String userImg;

    @Column(name = "user_admin")
    private String userAdmin = "N";

    @Column(name = "user_point")
    @ColumnDefault("0")
    private int userPoint;

    @Column(name = "user_cnt")
    @ColumnDefault("0")
    private int userCnt;

    @Column(name = "user_health")
    @ColumnDefault("")
    private String userHealth;

    @Column(name = "user_time")
    @ColumnDefault("")
    private String userTime;

    @Column(name = "user_rt")
    @ColumnDefault("")
    private String userRt;

    @Column(name = "user_dumy")
    @ColumnDefault("")
    private String userDumy;

    @Transient
    private String imp_uid;

   /* @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<PostData> postDataList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<UseData> useData = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<EmbeddedData> embeddedData = new ArrayList<>();*/
}
