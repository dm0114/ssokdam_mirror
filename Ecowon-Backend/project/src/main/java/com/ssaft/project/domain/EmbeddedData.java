package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "tb_embedded")
@Getter @Setter
@Entity
@ToString(exclude = "qrData")
@NoArgsConstructor
public class EmbeddedData {
    @Id
    @Column(name = "emb_id")
    private int embId;

    @Column(name = "emb_ful1")
    private String embFul1;

    @Column(name = "emb_ful2")
    private String embFul2;

    @Column(name = "emb_loc")
    private String embLoc;

    @Column(name = "emb_bat")
    private String embBat;

    @Column(name = "emb_cnt")
    private String embCnt;

    @Column(name = "emb_sta")
    private String embSta;

    @Column(name = "emb_dumy")
    private String embDumy;

    @Column(name = "emb_qr")
    private String embQr;

//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "emb_id")
//    private List<UseData> useData = new ArrayList<>();

    @Transient
    private String userId;
}
