package com.giovannidefranceschi.gio.photoShow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;


@SpringBootApplication
public class PhotoShowApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhotoShowApplication.class, args);

		/* testing */
//		List<Photo> importedDB =PhotoController.getList();

//		for (Photo photo : importedDB) {
//			System.out.println(photo.getId());
//			System.out.println(photo.getFileName());
//			System.out.println(photo.getDescription());
//		}
	}





}
