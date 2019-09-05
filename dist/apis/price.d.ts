import { Client } from '../client';
export declare enum OrderCurrencyCode {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
    currencyCode: OrderCurrencyCode;
    text: string;
    value: any;
}
export declare type PriceDedicatedNashaModel = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
export declare enum PriceDedicatedServerAntiDDoSPro {
    SK = "sk"
}
export declare type PriceDedicatedServerBackupStorage = '1000' | '10000' | '500' | '5000';
export declare enum PriceDedicatedServerFirewall {
    ASA5505 = "asa5505",
    ASA5510 = "asa5510",
    ASA5520 = "asa5520"
}
export declare enum PriceDedicatedServerIp {
    KIMSUFI = "kimsufi",
    PARKING = "parking"
}
export declare enum PriceDedicatedServerProfessionalUse {
    BHG = "bhg",
    EG = "eg",
    HG = "hg",
    MG = "mg",
    SP = "sp"
}
export declare enum PriceDedicatedCloud2013v1Bhs1aFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200G_GB = "nfs-13200g-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Bhs1aFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Bhs1aHostHourly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2013v1Bhs1aHostMonthly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2013v1Rbx2aFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200G_GB = "nfs-13200g-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Rbx2aFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Rbx2aHostHourly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2013v1Rbx2aHostMonthly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2013v1Sbg1aFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200G_GB = "nfs-13200g-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Sbg1aFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_3600_GB = "nfs-3600-GB",
    NFS_6600_GB = "nfs-6600-GB"
}
export declare enum PriceDedicatedCloud2013v1Sbg1aHostHourly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2013v1Sbg1aHostMonthly {
    L = "L",
    L_ = "L+",
    L__ = "L++",
    L2 = "L2",
    L2_ = "L2+",
    M = "M",
    S = "S",
    S__ = "S++",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200G_GB = "iscsi-13200g-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly {
    ISCSI_1200_GB = "iscsi-1200-GB",
    ISCSI_13200_GB = "iscsi-13200-GB",
    ISCSI_3300_GB = "iscsi-3300-GB",
    ISCSI_6600_GB = "iscsi-6600-GB",
    ISCSI_800_GB = "iscsi-800-GB",
    NFS_100_GB = "nfs-100-GB",
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly {
    L = "L",
    L_ = "L+",
    M = "M",
    XL = "XL",
    XL_ = "XL+"
}
export declare enum PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly {
    NFS_1200_GB = "nfs-1200-GB",
    NFS_13200_GB = "nfs-13200-GB",
    NFS_1600_GB = "nfs-1600-GB",
    NFS_2400_GB = "nfs-2400-GB",
    NFS_3300_GB = "nfs-3300-GB",
    NFS_6600_GB = "nfs-6600-GB",
    NFS_800_GB = "nfs-800-GB"
}
export declare enum PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly {
    SDDC_128 = "SDDC-128",
    SDDC_16 = "SDDC-16",
    SDDC_256 = "SDDC-256",
    SDDC_512 = "SDDC-512",
    SDDC_64 = "SDDC-64",
    SDDCVSAN_256 = "SDDCVSAN-256",
    SDDCVSAN_512 = "SDDCVSAN-512"
}
export declare enum PriceDomainZoneOption {
    DNSANYCAST = "dnsAnycast"
}
export declare enum PriceEmailExchangeOffer {
    HOSTED = "hosted"
}
export declare enum PriceHostingPrivateDatabase {
    MYSQL_4_1_1024 = "mysql_4.1_1024",
    MYSQL_4_1_128 = "mysql_4.1_128",
    MYSQL_4_1_256 = "mysql_4.1_256",
    MYSQL_4_1_512 = "mysql_4.1_512",
    MYSQL_5_0_1024 = "mysql_5.0_1024",
    MYSQL_5_0_128 = "mysql_5.0_128",
    MYSQL_5_0_256 = "mysql_5.0_256",
    MYSQL_5_0_512 = "mysql_5.0_512",
    MYSQL_5_1_1024 = "mysql_5.1_1024",
    MYSQL_5_1_128 = "mysql_5.1_128",
    MYSQL_5_1_256 = "mysql_5.1_256",
    MYSQL_5_1_512 = "mysql_5.1_512",
    MYSQL_5_5_1024 = "mysql_5.5_1024",
    MYSQL_5_5_128 = "mysql_5.5_128",
    MYSQL_5_5_256 = "mysql_5.5_256",
    MYSQL_5_5_512 = "mysql_5.5_512"
}
export declare enum PriceHostingWebCdn {
    CDN_BUSINESS = "CDN_BUSINESS"
}
export declare enum PriceHostingWebExtraSqlPerso {
    SQLPERSO_1_BASES_400_MB = "SQLPERSO_1_BASES_400_MB",
    SQLPERSO_1_BASES_800_MB = "SQLPERSO_1_BASES_800_MB",
    SQLPERSO_20_BASES_100_MB = "SQLPERSO_20_BASES_100_MB",
    SQLPERSO_20_BASES_200_MB = "SQLPERSO_20_BASES_200_MB",
    SQLPERSO_2_BASES_400_MB = "SQLPERSO_2_BASES_400_MB",
    SQLPERSO_2_BASES_800_MB = "SQLPERSO_2_BASES_800_MB",
    SQLPERSO_50_BASES_100_MB = "SQLPERSO_50_BASES_100_MB",
    SQLPERSO_50_BASES_200_MB = "SQLPERSO_50_BASES_200_MB",
    SQLPERSO_5_BASES_100_MB = "SQLPERSO_5_BASES_100_MB",
    SQLPERSO_5_BASES_200_MB = "SQLPERSO_5_BASES_200_MB",
    SQLPERSO_5_BASES_400_MB = "SQLPERSO_5_BASES_400_MB",
    SQLPERSO_5_BASES_800_MB = "SQLPERSO_5_BASES_800_MB"
}
export declare enum PriceHostingWebSsl {
    HOSTEDSSL = "HOSTEDSSL"
}
export declare enum PriceHpcspotAccountSubscription {
    HPCSPOT = "HPCSPOT"
}
export declare type PriceHpcspotConsumptionJob = '16core.64gb' | '4core.32gb' | '8core.32gb';
export declare type PriceHpcspotConsumptionReservation = '12core.60gb.quadrok400' | '1core.4gb' | '1core.4gb.quadrok4000' | '2core.8gb' | '2core.8gb.quadrok4000' | '4core.15gb' | '4core.15gb.quadrok4000' | '8core.30gb' | '8core.30gb.quadrok4000';
export declare type PriceHpcspotConsumptionSession = '16core.64gb' | '4core.32gb' | '8core.32gb';
export declare enum PriceLicenseOffice {
    OFFICEBUSINESS = "officeBusiness",
    OFFICEPROPLUS = "officeProPlus"
}
export declare enum PriceOverTheBoxOffer {
    PLUS_V1 = "plus.v1"
}
export declare enum PricePackXdslInstallation {
    ENTERPRISE = "enterprise",
    EXPRESS = "express",
    EXPRESSLITE = "expressLite"
}
export declare enum PricePackXdslOffers {
    ENTERPRISE = "enterprise",
    EXPRESS = "express",
    EXPRESSLITE = "expressLite"
}
export declare enum PricePackXdslOptions {
    ENTERPRISEGTR = "enterpriseGtr",
    VDSLFT = "vdslFt"
}
export declare enum PriceSaasCsp2License {
    AZUREACTIVEDIRECTORYBASIC = "AzureActiveDirectoryBasic",
    AZUREACTIVEDIRECTORYPREMIUMP1 = "AzureActiveDirectoryPremiumP1",
    BUSINESS = "Business",
    BUSINESSESSENTIALS = "BusinessEssentials",
    BUSINESSPREMIUM = "BusinessPremium",
    ENTERPRISEE1 = "EnterpriseE1",
    ENTERPRISEE3 = "EnterpriseE3",
    ENTERPRISEK1 = "EnterpriseK1",
    EXCHANGEONLINEPLAN1 = "ExchangeOnlinePlan1",
    PROPLUS = "ProPlus",
    PROJECTONLINE = "ProjectOnline",
    PROJECTONLINEPROFESSIONAL = "ProjectOnlineProfessional",
    VISIOPRO = "VisioPro"
}
export declare enum PriceTelephonyOffer {
    DISCOVERY = "discovery",
    ENTERPRISE = "enterprise",
    ENTERPRISEMOBILE = "enterpriseMobile",
    RESELLERENTERPRISE = "resellerEnterprise",
    RESELLERENTERPRISEMOBILE = "resellerEnterpriseMobile"
}
export declare enum PriceVps2013v1ClassicModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4",
    MODEL5 = "model5",
    MODEL6 = "model6"
}
export declare enum PriceVps2013v1CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4",
    MODEL5 = "model5",
    MODEL6 = "model6"
}
export declare enum PriceVps2013v1CloudOption {
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot",
    VEEAM = "veeam"
}
export declare enum PriceVps2013v1LowlatModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2014v1ClassicModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4"
}
export declare enum PriceVps2014v1CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4"
}
export declare enum PriceVps2014v1CloudOption {
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot",
    VEEAM = "veeam"
}
export declare enum PriceVps2015v1CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2015v1CloudOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2015v1CloudramModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2015v1CloudramOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2015v1SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2015v1SsdOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v1SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4"
}
export declare enum PriceVps2017v1SsdOption {
    IP = "ip"
}
export declare enum PriceVps2017v2CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v2CloudOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v2CloudramModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v2CloudramOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v2SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v2SsdOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v3CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v3CloudOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v3CloudramModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v3CloudramOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2017v3SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2017v3SsdOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2018v1CloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2018v1CloudOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2018v1CloudramModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2018v1CloudramOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    AUTOMATEDBACKUP = "automatedBackup",
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2018v1SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceVps2018v1SsdOption {
    ADDITIONALDISK100 = "additionalDisk100",
    ADDITIONALDISK200 = "additionalDisk200",
    ADDITIONALDISK50 = "additionalDisk50",
    ADDITIONALDISK500 = "additionalDisk500",
    IP = "ip",
    SNAPSHOT = "snapshot"
}
export declare enum PriceVps2018v2SsdModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4"
}
export declare enum PriceVps2018v2SsdOption {
    IP = "ip"
}
export declare enum PriceVpsClassicModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4",
    MODEL5 = "model5",
    MODEL6 = "model6"
}
export declare enum PriceVpsCloudModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3",
    MODEL4 = "model4",
    MODEL5 = "model5",
    MODEL6 = "model6"
}
export declare enum PriceVpsCloudOption {
    FTPBACKUP = "ftpbackup",
    IP = "ip",
    SNAPSHOT = "snapshot",
    VEEAM = "veeam"
}
export declare enum PriceVpsLowlatModel {
    MODEL1 = "model1",
    MODEL2 = "model2",
    MODEL3 = "model3"
}
export declare enum PriceXdslAddressMoveFee {
    KEEPPORTABILITY = "keepPortability"
}
export declare enum PriceXdslInstallation {
    BACKUP = "backup"
}
export declare enum PriceXdslOffers {
    BACKUP = "backup"
}
export declare enum PriceXdslOptionsInstallation {
    IPV4 = "ipv4"
}
export declare type PriceXdslOptionsIpv4 = '29';
export declare enum PriceXdslOptionsLine {
    CREATION = "creation",
    PARTIALTOTOTAL = "partialToTotal"
}
export declare class Price {
    private client;
    constructor(client: Client);
    /**
     * Get the price of Nas HA offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/nasha/model/%7BmodelName%7D#GET)
     */
    GetThePriceOfNasHAOffers(modelName: PriceDedicatedNashaModel): Promise<OrderPrice>;
    /**
     * Get price of anti-DDos Pro option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/antiDDoSPro/%7BcommercialRange%7D#GET)
     */
    GetPriceOfAntiDDosProOption(commercialRange: PriceDedicatedServerAntiDDoSPro): Promise<OrderPrice>;
    /**
     * Get price of backup storage offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/backupStorage/%7Bcapacity%7D#GET)
     */
    GetPriceOfBackupStorageOffer(capacity: PriceDedicatedServerBackupStorage): Promise<OrderPrice>;
    /**
     * Get price of available firewall models [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/firewall/%7BfirewallModel%7D#GET)
     */
    GetPriceOfAvailableFirewallModels(firewallModel: PriceDedicatedServerFirewall): Promise<OrderPrice>;
    /**
     * Get price of IPs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/ip/%7BroutedTo%7D#GET)
     */
    GetPriceOfIPs(routedTo: PriceDedicatedServerIp): Promise<OrderPrice>;
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Bhs1aFilerHourly): Promise<OrderPrice>;
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Bhs1aFilerMonthly): Promise<OrderPrice>;
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/host/hourly/%7BhostProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Bhs1aHostHourly): Promise<OrderPrice>;
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/host/monthly/%7BhostProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Bhs1aHostMonthly): Promise<OrderPrice>;
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /**
     * Get price of zone options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/domain/zone/option/%7BoptionName%7D#GET)
     */
    GetPriceOfZoneOptions(optionName: PriceDomainZoneOption): Promise<OrderPrice>;
    /**
     * Get the price for a private database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/privateDatabase/%7BprivateDatabaseName%7D#GET)
     */
    GetThePriceForAPrivateDatabase(privateDatabaseName: PriceHostingPrivateDatabase): Promise<OrderPrice>;
    /**
     * Get the price for cdn option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/cdn/%7BcdnName%7D#GET)
     */
    GetThePriceForCdnOption(cdnName: PriceHostingWebCdn): Promise<OrderPrice>;
    /**
     * Get the price for extra sql perso option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/extraSqlPerso/%7BextraSqlPersoName%7D#GET)
     */
    GetThePriceForExtraSqlPersoOption(extraSqlPersoName: PriceHostingWebExtraSqlPerso): Promise<OrderPrice>;
    /**
     * Get the price for hosted ssl option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/ssl/%7BsslName%7D#GET)
     */
    GetThePriceForHostedSslOption(sslName: PriceHostingWebSsl): Promise<OrderPrice>;
    /**
     * Get the price of a HPC Spot Account for 1 month [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/account/subscription/%7BsubscriptionName%7D#GET)
     */
    GetThePriceOfAHPCSpotAccountFor1Month(subscriptionName: PriceHpcspotAccountSubscription): Promise<OrderPrice>;
    /**
     * Get the price of a JOB consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/job/%7Breference%7D#GET)
     */
    GetThePriceOfAJOBConsumptionFor1Hour(reference: PriceHpcspotConsumptionJob): Promise<OrderPrice>;
    /**
     * Get the price of a RESERVATION consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/reservation/%7Breference%7D#GET)
     */
    GetThePriceOfARESERVATIONConsumptionFor1Hour(reference: PriceHpcspotConsumptionReservation): Promise<OrderPrice>;
    /**
     * Get the price of a SESSION consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/session/%7Breference%7D#GET)
     */
    GetThePriceOfASESSIONConsumptionFor1Hour(reference: PriceHpcspotConsumptionSession): Promise<OrderPrice>;
    /**
     * Get the monthly price for an office license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/license/office/%7BofficeName%7D#GET)
     */
    GetTheMonthlyPriceForAnOfficeLicense(officeName: PriceLicenseOffice): Promise<OrderPrice>;
    /**
     * Get the price of overTheBox offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/overTheBox/offer/%7BofferName%7D#GET)
     */
    GetThePriceOfOverTheBoxOffers(offerName: PriceOverTheBoxOffer): Promise<OrderPrice>;
    /**
     * Get the monthly price for an Office 365 license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/saas/csp2/license/%7BlicenseName%7D#GET)
     */
    GetTheMonthlyPriceForAnOffice365License(licenseName: PriceSaasCsp2License): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2013(modelName: PriceVps2013v1ClassicModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Classic 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic2013(modelName: PriceVps2013v1CloudModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud Options 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions2013(optionName: PriceVps2013v1CloudOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Low Latency 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/lowlat/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSLowLatency2013(modelName: PriceVps2013v1LowlatModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Classic 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic2014(modelName: PriceVps2014v1ClassicModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2014(modelName: PriceVps2014v1CloudModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud Options 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions2014(optionName: PriceVps2014v1CloudOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud 2015 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2015(modelName: PriceVps2015v1CloudModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions20152016(optionName: PriceVps2015v1CloudOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud RAM 2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloudram/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloudRAM2016(modelName: PriceVps2015v1CloudramModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloudram/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudRAMOptions20152016(optionName: PriceVps2015v1CloudramOption): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD 2015 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2015(modelName: PriceVps2015v1SsdModel): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDOptions20152016(optionName: PriceVps2015v1SsdOption): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD Discovery 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSDDiscovery2017(modelName: PriceVps2017v1SsdModel): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD Discovery Options 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v1/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDDiscoveryOptions2017(optionName: PriceVps2017v1SsdOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2017(modelName: PriceVps2017v2CloudModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloud/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloudram/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloudRAM2017(modelName: PriceVps2017v2CloudramModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloudram/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS SSD 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2017(modelName: PriceVps2017v2SsdModel): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/ssd/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloud/model/%7BmodelName%7D#GET)
     */
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloud/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloudram/model/%7BmodelName%7D#GET)
     */
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloudram/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS SSD 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/ssd/model/%7BmodelName%7D#GET)
     */
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/ssd/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloud/model/%7BmodelName%7D#GET)
     */
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloud/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloudram/model/%7BmodelName%7D#GET)
     */
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloudram/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS SSD 2018 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2018(modelName: PriceVps2018v1SsdModel): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/ssd/option/%7BoptionName%7D#GET)
     */
    /**
     * Get price of VPS SSD APAC [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v2/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSDAPAC(modelName: PriceVps2018v2SsdModel): Promise<OrderPrice>;
    /**
     * Get price of VPS SSD APAC Options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v2/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDAPACOptions(optionName: PriceVps2018v2SsdOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Classic [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic(modelName: PriceVpsClassicModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud(modelName: PriceVpsCloudModel): Promise<OrderPrice>;
    /**
     * Get price of VPS Cloud Options [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions(optionName: PriceVpsCloudOption): Promise<OrderPrice>;
    /**
     * Get price of VPS Low Latency [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/lowlat/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSLowLatency(modelName: PriceVpsLowlatModel): Promise<OrderPrice>;
    /**
     * Get the price of address move option fee [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/addressMove/fee/%7Boption%7D#GET)
     */
    GetThePriceOfAddressMoveOptionFee(option: PriceXdslAddressMoveFee): Promise<OrderPrice>;
    /**
     * Get the price of options installation fee [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/installation/%7Boffer%7D#GET)
     */
    GetThePriceOfOptionsInstallationFee(offer: PriceXdslInstallation): Promise<OrderPrice>;
    /**
     * Get the price of xdsl offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/offers/%7BoffersName%7D#GET)
     */
    GetThePriceOfXdslOffers(offersName: PriceXdslOffers): Promise<OrderPrice>;
    /**
     * Get the price of options installation fee [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/installation/%7Boption%7D#GET)
     */
    /**
     * Get the price of IPv4 options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/ipv4/%7BipRange%7D#GET)
     */
    GetThePriceOfIPv4Options(ipRange: PriceXdslOptionsIpv4): Promise<OrderPrice>;
    /**
     * Get the price of line action [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/line/%7BlineAction%7D#GET)
     */
    GetThePriceOfLineAction(lineAction: PriceXdslOptionsLine): Promise<OrderPrice>;
}
//# sourceMappingURL=price.d.ts.map