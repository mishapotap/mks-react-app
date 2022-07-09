import React from "react";
import styles from "./ModalTechnical.module.css";

const ModalTechnical = ({ data }) => {
	return (
        <div className={styles.wrapper}>
            {data.title && <div className={styles.title}>{data.title}</div>}
            {data.content.map((item) => (
                <div key={item.id} className={styles.item}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.hr}></div>
                    <div className={styles.value}>{item.value}</div>
                </div>
            ))}
        </div>

        // <View className={styles.wrapper}>
        //     {data.title && <Text className={styles.title}>{data.title}</Text>}
        //     {data.content.map((item) => (
        //         <View key={item.id} className={styles.item}>
        //             <Text className={styles.name}>{item.name}</Text>
        //             <View className={styles.hr}></View>
        //             <Text className={styles.value}>{item.value}</Text>
        //         </View>
        //     ))}
		// </View>
	);
};

export default {
	name: "ModalTechnical",
	Component: ModalTechnical,
};