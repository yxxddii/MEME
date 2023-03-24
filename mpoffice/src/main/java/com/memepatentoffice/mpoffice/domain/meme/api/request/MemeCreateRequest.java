package com.memepatentoffice.mpoffice.domain.meme.api.request;

import com.memepatentoffice.mpoffice.db.entity.Meme;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
public class MemeCreateRequest {
    private String content;
    private MultipartFile file;
    private LocalDateTime createdAt;
    private Long createrId;
    private Long ownerId;
    private String title;

    private String imageUrl;

    public void setContent(String content) {
        this.content = content;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setCreaterId(Long createrId) {
        this.createrId = createrId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setFile(MultipartFile file){
        this.file = file;
    }

    public Meme toEntity(){
        return Meme.builder()
                .createrId(createrId)
                .ownerId(ownerId)
                .title(title)
                .content(content)
                .createdAt(createdAt)
                .imageurl(imageUrl)
                .build();
    }
}