package com.example.reservation.dto;

import lombok.Data;

public class ItemGroupDto {

    @Data
    public static class Detail {
        private long id;
        private String name;
    }

    @Data
    public static class Summary {
        private long id;
        private String name;
    }

    @Data
    public static class Create {
        private String name;
    }

    @Data
    public static class Update {
        private String name;
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
    }

}
