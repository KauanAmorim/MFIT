import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './card.css'
import React from 'react';
import axios from 'axios';
import { IFlavor } from '../index.types';

interface IMediaCard {
    imagePath: string,
    nameFlavor: string,
    limit: number,
    currentKit?: string,
    flavor: IFlavor
}

interface ICartFlavors {
    name: String,
    count: number
}
interface ISelectedFlavors {
    count: number,
    cartFlavors?: ICartFlavors[]
}

interface IStorageFlavor extends IFlavor {
    qtdFlavor: number
}
interface IStorageCurrentKit {
    limit: number,
    count: number,
    flavors: IStorageFlavor[]
}

const api = axios.create({ 
    baseURL: 'https://mais-fit.herokuapp.com/',
})

function flavorExist(flavors: IStorageFlavor[], flavor: IStorageFlavor): Boolean {
    for (let index = 0; index < flavors.length; index++) {
        if(flavor.id == flavors[index].id) {
            return true
        } 
    }
    return false
}

function updateFlavor (flavors: IStorageFlavor[], flavor: IStorageFlavor) {
    if(flavors.length) {
        for (let index = 0; index < flavors.length; index++) {
            if(flavor.id == flavors[index].id) {
                flavors[index].qtdFlavor = flavor.qtdFlavor
                return flavors
            }
        }
    }
    return flavors
}

function saveFlavor(flavor: IFlavor, qtdFlavor: number): void {
    const currentKitStorage = localStorage.getItem("currentKit")
    console.log(currentKitStorage)
    if(currentKitStorage){

        const currentKitJson = JSON.parse(currentKitStorage)
        const flavors: IStorageFlavor[] = currentKitJson.flavors
        const flavorToStorage: IStorageFlavor = { ...flavor, qtdFlavor }

        if(flavorExist(flavors, flavorToStorage)) {
            const flavorsUpdated = updateFlavor(flavors, flavorToStorage)
            currentKitJson.flavors = flavorsUpdated
            localStorage.setItem("currentKit", JSON.stringify(currentKitJson))
        } else {
            flavors.push(flavorToStorage)
            currentKitJson.flavors = flavors
            localStorage.setItem("currentKit", JSON.stringify(currentKitJson))
        }
    }
}

export default function MediaCardFlavor(props: IMediaCard) {
    const { imagePath, nameFlavor, limit, currentKit, flavor } = props
    
    const [selectedFlavors, setSelectedFlavors] = React.useState<ISelectedFlavors>({ count: 0 });

    const addFlavor = () => {
        if(selectedFlavors.count < limit) {
            setSelectedFlavors({ count: selectedFlavors.count + 1 })
            saveFlavor(flavor, selectedFlavors.count)
        }
    }

    const removeFlavor = () => {
        if (selectedFlavors.count > 0) {
            setSelectedFlavors({ count: selectedFlavors.count - 1 })
            saveFlavor(flavor, selectedFlavors.count)
        }
    }

    return (
        <div className='flavor'>
            <Card className='flavorCard' sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={imagePath}
                    alt="green iguana"
                />
                <div className='flavorName'>{nameFlavor}</div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div
                        onClick={removeFlavor}
                        style={{ width: '33%', textAlign: 'center', color: 'black' }}
                    >
                        <span><RemoveIcon /></span>
                    </div>
                    <div style={{ width: '34%', textAlign: 'center' }}> {selectedFlavors.count} </div>
                    <div
                        onClick={addFlavor}
                        style={{ width: '33%', textAlign: 'center', color: 'black' }}
                    >
                        <span><AddIcon /></span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
