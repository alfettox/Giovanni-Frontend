package com.giovannidefranceschi.gio.photoShow;


import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.*;

@RestController
public class PhotoController {

    private Map<String, Photo> db = new HashMap<>(){{
            put("1", new Photo("1","pictureOfMe.jpg", "This is a picture of me"));
            put("2", new Photo("2","pictureOfDog.jpg", "This is a dog"));
            put("3", new Photo("3","pictureOfCat.jpg", "This is a cat"));
        }};



    @GetMapping("/")
    public String welcome(){
        return "Welcome to the photo show!";
    }

    @GetMapping("/photo")
    public String getPhoto(){
        return "This is a photo";
    }

    @GetMapping("/list")
    public Collection<Photo> get(){
        return db.values();
    }

    @GetMapping("/photos/{id}")
    public Photo get(@PathVariable String id){
//        if(db.containsKey(id)){
//            return db.get(id);
//        }
        if(!db.containsKey(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Photo not found");
        return db.get(id);
    }


    @DeleteMapping("/photos/{id}")
    public String delete(@PathVariable String id){
        if(!db.containsKey(id)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Photo not found");
        db.remove(id);
        return "Photo" + id +"deleted";
    }

    @PostMapping("/photos")
    public String post(@ModelAttribute @Valid Photo photo){
        if(db.containsKey(photo.getId())) throw new ResponseStatusException(HttpStatus.CONFLICT, "Photo already exists");
        db.put(photo.getId(), photo);
        return "Photo" + photo.getId() +"added";
    }

    @PostMapping("/photosImages")
    public String post(@RequestPart("data") MultipartFile file) throws IOException {
        Photo photo = new Photo();
        photo.setId(UUID.randomUUID().toString());
        photo.setFileName(file.getOriginalFilename());
        photo.setDescription("This is a photo");
        db.put(photo.getId(), photo);
        return "Photo" + photo.getId() +"added";
    }

    /* testing */
//    public static List<Photo> getList(){
//        return db;
//    }
}
