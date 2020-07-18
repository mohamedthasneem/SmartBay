package com.uok.common;

public class SalesDetails {
    private int registeredCustomerCount;

    private int pendingOrderCount;

    private int deliveredOrderCount;

    private float totalSales;

    public SalesDetails(int registeredCustomerCount, int pendingOrderCount, int deliveredOrderCount, float totalSales) {
        this.registeredCustomerCount = registeredCustomerCount;
        this.pendingOrderCount = pendingOrderCount;
        this.deliveredOrderCount = deliveredOrderCount;
        this.totalSales = totalSales;
    }

    public int getRegisteredCustomerCount() {
        return registeredCustomerCount;
    }

    public void setRegisteredCustomerCount(int registeredCustomerCount) {
        this.registeredCustomerCount = registeredCustomerCount;
    }

    public int getPendingOrderCount() {
        return pendingOrderCount;
    }

    public void setPendingOrderCount(int pendingOrderCount) {
        this.pendingOrderCount = pendingOrderCount;
    }

    public int getDeliveredOrderCount() {
        return deliveredOrderCount;
    }

    public void setDeliveredOrderCount(int deliveredOrderCount) {
        this.deliveredOrderCount = deliveredOrderCount;
    }

    public float getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(float totalSales) {
        this.totalSales = totalSales;
    }
}
