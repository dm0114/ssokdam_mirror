package com.ssaft.project.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Table(name = "tb_use")
@Getter @Setter
@Entity
@ToString
@NoArgsConstructor
public class UseData {
    @Id
    @Column(name = "use_cnt")
    private int useCnt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", updatable = false)
    private IotUser iotUser;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "emb_id", updatable = false)
    private EmbeddedData embeddedData;

    @Column(name = "use_time")
    private String userTime;

    @Column(name = "use_dumy")
    private String useDumy;

    @Transient
    private String userId;

    @Transient
    private String embId;
}
