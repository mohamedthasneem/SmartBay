package com.uok.repository;


import com.uok.common.Rating;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RatingRepository extends MongoRepository<Rating,String> {
}
