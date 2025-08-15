package com.servipark.servipark.dto;

public class VehicleDTO {
    private String owner;
    private String plate;
    private String color;
    private String model;
    private int year;

    public VehicleDTO() {
    }

    public VehicleDTO(String owner, String plate, String color, String model, int year) {
        this.owner = owner;
        this.plate = plate;
        this.color = color;
        this.model = model;
        this.year = year;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getmodel() {
        return model;
    }

    public void setmodel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
