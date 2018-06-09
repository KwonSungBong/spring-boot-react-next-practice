package com.example.reservation.controller;

import com.example.reservation.entity.Image;
import com.example.reservation.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.UUID;

@RestController
@RequestMapping("/image")
public class ImageController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Autowired
    private ImageRepository imageRepository;

    @GetMapping
    public Iterable<Image> findSummaryList() {
        return imageRepository.findAll();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestPart("data") Image image, @RequestPart("file") MultipartFile file) {
        LocalDate now = LocalDate.now();
        String storedImageName = now + UUID.randomUUID().toString();
        storedImageName = storedImageName.replace(":", "").replace(".", "");

        DecimalFormat df = new DecimalFormat("00");
        String fileUploadPath =
                uploadDir
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

//        imageRepository.save(image);
    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        fileName = "sample/test";

        Resource resource;
        try {
            Path fileStorageLocation = Paths.get(uploadDir);
            Path filePath = fileStorageLocation.resolve(fileName).normalize();
            Resource result = new UrlResource(filePath.toUri());
            if(result.exists()) {
                resource = result;
            } else {
                throw new RuntimeException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new RuntimeException("File not found " + fileName, ex);
        }

        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            throw new RuntimeException("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}
