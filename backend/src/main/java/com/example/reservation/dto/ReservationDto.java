package com.example.reservation.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

public class ReservationDto {

    @Data
    public static class Detail {
        private long id;
        private String subject;
        private String content;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
        private Date createdDate;
    }

    @Data
    public static class Summary {
        private long id;
        private String subject;
        private String content;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
        private Date createdDate;
    }

    @Data
    public static class Create {
        private String subject;
        private String content;
    }

    @Data
    public static class Update {
        private long id;
        private String subject;
        private String content;
    }

    @Data
    public static class Delete {
        private long id;
    }

    @Data
    public static class Refer {
        private long id;
    }

    @Data
    public static class Search {
        private String subject;
    }

}
