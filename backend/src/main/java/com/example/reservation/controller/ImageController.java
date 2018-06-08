package com.example.reservation.controller;

import com.example.reservation.entity.Image;
import com.example.reservation.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.UUID;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @CrossOrigin
    @GetMapping
    public Iterable<Image> findSummaryList() {
        return imageRepository.findAll();
    }

    @CrossOrigin
    @PostMapping(consumes = {"multipart/form-data"})
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestPart("data") Image image, @RequestPart("file") MultipartFile file) {
        String uploadPath = "./images";

        LocalDate now = LocalDate.now();
        String storedImageName = now + UUID.randomUUID().toString();
        storedImageName = storedImageName.replace(":", "").replace(".", "");

        DecimalFormat df = new DecimalFormat("00");
        String fileUploadPath =
                uploadPath
                        + File.separator
                        + now.getYear()
                        + File.separator
                        + df.format(now.getMonthValue())
                        + File.separator
                        + df.format(now.getDayOfMonth())
                        + File.separator;

        File dir = new File(fileUploadPath);
        if(!dir.exists() && !dir.mkdirs()){
            throw new RuntimeException("IMAGE_FILE_UPLOAD_ERROR_MESSAGE");
        }

        fileUploadPath = fileUploadPath.concat(storedImageName);

        try {
            FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(fileUploadPath));
        } catch (IOException e) {
            throw new RuntimeException("IMAGE_FILE_UPLOAD_ERROR_MESSAGE");
        }

        image.setStoredImageName(storedImageName);
        image.setContentType(file.getContentType());
        image.setImageSize(file.getSize());
        image.setImageName(file.getOriginalFilename());

        imageRepository.save(image);
    }

}
