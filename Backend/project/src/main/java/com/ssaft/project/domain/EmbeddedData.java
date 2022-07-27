package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Table(name = "tb_embedded")
@Getter @Setter
@Entity
@ToString(exclude = "qrData")
@NoArgsConstructor
public class EmbeddedData {
    @Id
    @Column(name = "emb_id")
    private int embId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", updatable = false)
    private IotUser iotUser;

    @Column(name = "emb_ful1")
    private String embFul1;

    @Column(name = "emb_ful2")
    private String embFul2;

    @Column(name = "emb_lat")
    private String embLat;

    @Column(name = "emb_Lng")
    private String embLng;

    @Column(name = "emb_bat")
    private String embBat;

    @Column(name = "emb_cnt")
    private String embCnt;

    @Column(name = "emb_sta")
    @ColumnDefault("Y")
    private String embSta;

    @Column(name = "emb_dumy")
    private String embDumy;

    @Column(name = "emb_qr")
    @ColumnDefault("N")
    private String embQr;

//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "emb_id")
//    private List<UseData> useData = new ArrayList<>();

    @Transient
    private String userId;
}
