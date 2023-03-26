import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { memeUploadActions } from "store/memeUpload";
import { RootState } from "store/configStore";

import styles from "./MemeInfoInput.module.css";

const MemeInfoInput: React.FC = () => {
  const dispatch = useDispatch();

  const input = useSelector<RootState, string>(state => state.memeUpload.info)
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(memeUploadActions.putInfo(e.target.value));
  };

  return (
    <div className={styles.infoInputContainer}>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.inputBox}
          value={input}
          onChange={changeHandler}
          placeholder="밈에 대한 뜻을 입력해주세요."
        />
      </div>
      <p className={styles.explanation}>
        유해성 검사를 통과하지 못했습니다.
      </p>
    </div>
  );
};

export default MemeInfoInput;
