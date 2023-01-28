package com.giovannidefranceschi.gio.photoShow;

import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public class Photo {


    private String id;

    @NotEmpty
    private String fileName;
    private String description;





    public Photo(){

    }

    public String getId() {
        return id;
    }

    public String getFileName()
    {
        return fileName;
    }

    public String getDescription()
    {
        return description;
    }

    public Photo(String id, String fileName, String description) {
        this.id = id;
        this.fileName = fileName;
        this.description = description;
    }


    public void setId(String toString) {
        this.id = toString;
    }

    public void setFileName(String originalFilename) {
        this.fileName = originalFilename;
    }

    public void setDescription(String this_is_a_photo) {
        this.description = this_is_a_photo;
    }
}
